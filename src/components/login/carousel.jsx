import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import GambarSatu from "/assets/Carousel/CarouselIMG/Gambar 1.png"
import GambarDua from "/assets/Carousel/CarouselIMG/Gambar 2.png"
import GambarTiga from "/assets/Carousel/CarouselIMG/Gambar 3.png"
import GambarEmpat from "/assets/Carousel/CarouselIMG/Gambar 4.png"
import GambarLima from "/assets/Carousel/CarouselIMG/Gambar 5.png"
import "../../styles/login.css"

const CarouselLogin = () => {
    return (    
        <Carousel className='carouselLogin' variant='dark'>
            <Carousel.Item>
                <div className='gambarPlaceholder'>
                    <Image src={GambarSatu} alt='Posting Review Buku' className='gambarCarousel'/>
                </div>
                <Carousel.Caption className='text-black carouselCaption'>
                    <h3>Posting Review Buku</h3>
                    <p>Bagikan review buku bacaanmu dan buatlah orang di sekitarmu termotivasi</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='gambarPlaceholder'>
                    <Image src={GambarDua} alt='Hibahkan bukumu' className='gambarCarousel'/>
                </div>
                <Carousel.Caption className='text-black carouselCaption'>
                    <h3>Hibahkan Buku</h3>
                    <p>Buku bacaanmu menumpuk dan tidak terpakai? Koper Pustaka merupakan wadah yang tepat untuk menghibahkan buku bukumu </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='gambarPlaceholder'>
                    <Image src={GambarTiga} alt='Pinjam Buku' className='gambarCarousel'/>
                </div>
                <Carousel.Caption className='text-black carouselCaption'>
                    <h3>Pinjam Buku</h3>
                    <p>Peminjaman buku secara berantai melalui sistem yang lebih terstruktur dan terpercaya dengan validasi identitas</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='gambarPlaceholder'>
                    <Image src={GambarEmpat} alt='Full Berantai' className='gambarCarousel'/>
                </div>
                <Carousel.Caption className='text-black carouselCaption'>
                    <h3>Full Berantai</h3>
                    <p>Buku dengan label Full Berantai (FB) memberikan tanda bahwa buku harus selalu diteruskan kepada penerima selanjutnya</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='gambarPlaceholder'>
                    <Image src={GambarLima} alt='Non Full Berantai' className='gambarCarousel'/>
                </div>
                <Carousel.Caption className='text-black carouselCaption'>
                    <h3>Non Full Berantai</h3>
                    <p>Buku dengan label Non Full Berantai (nFB) memberikan tanda bahwa buku dapat disimpan sebagai milik pribadi atau diteruskan kepada penerima selanjutnya</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselLogin