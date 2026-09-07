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

# --- (Keep your grid generation, Open-Meteo fetching, and interpolation code here) ---

# 4. Render Weather Chart and save to file
fig, ax = plt.subplots(figsize=(10, 7.5), subplot_kw={'projection': ccrs.PlateCarree()})
ax.set_extent([90, 146, 8, 42], crs=ccrs.PlateCarree())

ax.add_feature(cfeature.LAND, facecolor='#f4f8f3')
ax.add_feature(cfeature.OCEAN, facecolor='#e0f0ff')
ax.add_feature(cfeature.COASTLINE, linewidth=0.6)
ax.add_feature(cfeature.BORDERS, linestyle=':', alpha=0.5)
ax.gridlines(draw_labels=True, linestyle='--', alpha=0.3)

min_p = np.floor(np.nanmin(grid_pressure_2d) / 2) * 2
max_p = np.ceil(np.nanmax(grid_pressure_2d) / 2) * 2
contour_levels = np.arange(min_p, max_p + 2, 2)

cs = ax.contour(interp_lon, interp_lat, grid_pressure_2d, levels=contour_levels, colors='black', linewidths=0.7)
ax.clabel(cs, inline=True, fontsize=8, fmt='%d')

for h in highs:
    ax.text(h[0], h[1], 'H', color='red', fontsize=12, weight='bold', ha='center', va='center', transform=ccrs.PlateCarree())
    ax.text(h[0], h[1] - 0.8, f'{h[2]:.0f}', color='red', fontsize=7, weight='bold', ha='center', transform=ccrs.PlateCarree())

for l in lows:
    ax.text(l[0], l[1], 'L', color='blue', fontsize=12, weight='bold', ha='center', va='center', transform=ccrs.PlateCarree())
    ax.text(l[0], l[1] - 0.8, f'{l[2]:.0f}', color='blue', fontsize=7, weight='bold', ha='center', transform=ccrs.PlateCarree())

current_time = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:00 UTC')
plt.title('Regional Synoptic Weather Chart (Open-Meteo)', fontsize=10, weight='bold', loc='left')
plt.title(f'VALID: {current_time}', fontsize=9, loc='right')

# Save directly to file instead of Flask buffer
plt.savefig('map.png', format='png', bbox_inches='tight', dpi=120)
plt.close(fig)
