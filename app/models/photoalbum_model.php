<?php

require_once("app/models/activeRecords/photoAR.php");
class Photoalbum_model{


    public $photos;

    // public $photos = [
        // "/public/assets/img/cars/nsx.jpg",
        // "/public/assets/img/cars/skyliner32.jpg",
        // "/public/assets/img/cars/s2k.jpg",
        // "/public/assets/img/cars/prelude.jpg",
        // "/public/assets/img/cars/skyline32.jpg",
        // "/public/assets/img/cars/por.jpg",
        // "/public/assets/img/cars/por911.jpg",
        // "/public/assets/img/cars/rx7.jpg",
        // "/public/assets/img/cars/miata.jpg",
        // "/public/assets/img/cars/miata2.jpg",
        // "/public/assets/img/cars/datsun.jpg",
        // "/public/assets/img/cars/fairl.jpg",
        // "/public/assets/img/cars/180sx.jpg",
        // "/public/assets/img/cars/180sx2.jpg",
        // "/public/assets/img/cars/180sx3.jpg"
    // ];

    // public $titles = [
        // "Honda NSX",
        // "Nissan Skyline GT-R R32",
        // "Honda S2000",
        // "Honda Prelude",
        // "Nissan Skyline GT-R R32",
        // "Porsche 911",
        // "Porsche 911 RAUH-Welt Begriff",
        // "Mazda RX-7 FD RocketBunny",
        // "Mazda Mx-5 Miata",
        // "Mazda Mx-5 Miata",
        // "Datsun 620",
        // "Nissan 240Z Fairlady",
        // "Nissan 180SX",
        // "Nissan 180SX",
        // "Nissan 180SX"
    // ];
    
    function __construct(){
    
        $this->photos = Photo::FindAll();
        
    }

    function getPhoto($id){
        return $this->photos["$id"]->photo;
    }

    function getTitle($id){
        return $this->photos["$id"]->title;
    }

}