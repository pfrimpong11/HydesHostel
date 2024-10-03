import React from "react";
import Header from '../components/Header';
import Room from '../components/Rooms';
import PhotoGallery from "../components/PhotoGallery";
import Footer from '../components/Footer';

const RoomPage: React.FC = () => {
    return (
        <>
        <Header/>
        <Room/>
        <PhotoGallery />
        <Footer/>
        </>
    )
}

export default RoomPage;