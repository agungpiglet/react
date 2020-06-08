import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog
            tanggal="08 Juni 2020"
            judul="Manusia Purba"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Blog
            tanggal="09 Juni 2020"
            judul="Tekhnologi Informasi"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Blog
            tanggal="10 Juni 2020"
            judul="Sistem Informasi"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
    </div>
}

export default Home;