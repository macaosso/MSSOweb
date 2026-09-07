import datetime
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature
import numpy as np
import requests
from scipy.interpolate import griddata
from scipy.ndimage import maximum_filter, minimum_filter

# 1. Setup a high-density grid matching the requested extent: (90, 146, 8, 42)
lons_grid = np.arange(90, 148, 2.5)
lats_grid = np.arange(8, 44, 2.5)
lon_mesh, lat_mesh = np.meshgrid(lons_grid, lats_grid)
flat_lons = lon_mesh.flatten()
flat_lats = lat_mesh.flatten()

# 2. Batch fetch Mean Sea Level Pressure from Open-Meteo for the grid
lat_str = ','.join(map(str, flat_lats))
lon_str = ','.join(map(str, flat_lons))
url_grid = f'https://api.open-meteo.com/v1/forecast?latitude={lat_str}&longitude={lon_str}&hourly=pressure_msl&forecast_days=1'

res_grid = requests.get(url_grid).json()
if isinstance(res_grid, dict):
  if res_grid.get('error'):
    raise RuntimeError(f"Open-Meteo API Error: {res_grid.get('reason')}")
  res_grid = [res_grid]

grid_pressures = [
    loc.get('hourly', {}).get('pressure_msl', [1013])[0] or 1013.0
    for loc in res_grid
]
grid_pressures = np.array(grid_pressures)

# 3. Interpolate pressure onto a smooth 2D mesh spanning [90, 146, 8, 42]
interp_lon, interp_lat = np.meshgrid(
    np.linspace(90, 146, 250), np.linspace(8, 42, 250)
)
grid_pressure_2d = griddata(
    (flat_lons, flat_lats),
    grid_pressures,
    (interp_lon, interp_lat),
    method='cubic',
)

def find_extrema_coords(grid_z, grid_x, grid_y, mode='max', n=2):
  if mode == 'max':
    local_mask = grid_z == maximum_filter(
        grid_z, size=15, mode='constant', cval=-9999
    )
  else:
    local_mask = grid_z == minimum_filter(
        grid_z, size=15, mode='constant', cval=9999
    )

  y_indices, x_indices = np.where(local_mask)
  values = grid_z[y_indices, x_indices]
  sorted_idx = (
      np.argsort(values)[::-1] if mode == 'max' else np.argsort(values)
  )

  points = []
  for idx in sorted_idx:
    yi, xi = y_indices[idx], x_indices[idx]
    points.append((grid_x[yi, xi], grid_y[yi, xi], grid_z[yi, xi]))
    if len(points) >= n:
      break
  return points

highs = find_extrema_coords(
    grid_pressure_2d, interp_lon, interp_lat, mode='max', n=2
)
lows = find_extrema_coords(
    grid_pressure_2d, interp_lon, interp_lat, mode='min', n=2
)

# 4. Render Weather Chart (Your exact configuration)
fig, ax = plt.subplots(
    figsize=(12, 9), subplot_kw={'projection': ccrs.PlateCarree()}
)
ax.set_extent([90, 146, 8, 42], crs=ccrs.PlateCarree())

ax.add_feature(cfeature.LAND, facecolor='#f4f8f3')
ax.add_feature(cfeature.OCEAN, facecolor='#e0f0ff')
ax.add_feature(cfeature.COASTLINE, linewidth=0.6)
ax.add_feature(cfeature.BORDERS, linestyle=':', alpha=0.5)
ax.gridlines(draw_labels=True, linestyle='--', alpha=0.3)

# Isobars every 2 hPa (even numbers only)
min_p = np.floor(np.nanmin(grid_pressure_2d) / 2) * 2
max_p = np.ceil(np.nanmax(grid_pressure_2d) / 2) * 2
contour_levels = np.arange(min_p, max_p + 2, 2)

cs = ax.contour(
    interp_lon,
    interp_lat,
    grid_pressure_2d,
    levels=contour_levels,
    colors='black',
    linewidths=0.7,
)
ax.clabel(cs, inline=True, fontsize=8, fmt='%d')

# Plot top two highest (Red H) and two lowest (Blue L) pressure centers
for h in highs:
  ax.text(
      h[0],
      h[1],
      'H',
      color='red',
      fontsize=14,
      weight='bold',
      ha='center',
      va='center',
      transform=ccrs.PlateCarree(),
  )
  ax.text(
      h[0],
      h[1] - 0.8,
      f'{h[2]:.0f}',
      color='red',
      fontsize=8,
      weight='bold',
      ha='center',
      transform=ccrs.PlateCarree(),
  )

for l in lows:
  ax.text(
      l[0],
      l[1],
      'L',
      color='blue',
      fontsize=14,
      weight='bold',
      ha='center',
      va='center',
      transform=ccrs.PlateCarree(),
  )
  ax.text(
      l[0],
      l[1] - 0.8,
      f'{l[2]:.0f}',
      color='blue',
      fontsize=8,
      weight='bold',
      ha='center',
      transform=ccrs.PlateCarree(),
  )

# Add Data Time and Titles
current_time = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:00 UTC')
plt.title(
    'Regional Synoptic Weather Chart (Open-Meteo)',
    fontsize=11,
    weight='bold',
    loc='left',
)
plt.title(f'VALID: {current_time}', fontsize=10, loc='right')

# Save to map.png instead of plt.show()
plt.savefig('map.png', format='png', bbox_inches='tight', dpi=120)
plt.close(fig)
