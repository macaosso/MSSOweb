<?php
header("Access-Control-Allow-Origin: *");
$jsonPath = __DIR__ . "/wind-history.json";
$raw = file_get_contents('php://input');
$newArr = json_decode($raw,true);
if(is_array($newArr)){
    // auto delete data older than 12h
    $cut = time()*1000 - 12*3600*1000;
    $newArr = array_filter($newArr,function($item)use($cut){
        return $item['ts']>$cut;
    });
    file_put_contents($jsonPath,json_encode(array_values($newArr)));
}
echo "ok";
?>
