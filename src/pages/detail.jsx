// Import yang diperlukan
import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBukuApp from '../components/detail-page/DetailBukuApp';

// Komponen DetailPage
const DetailPage = () => {
    const { title } = useParams();
    return <DetailBukuApp match={{ params: { title } }} />;
}

export default DetailPage;
