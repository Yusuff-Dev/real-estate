import { useSwiper } from "swiper/react"
import ButtonUI from "../../UI/ButtonUI";

function CustomNavigation() {
    const swiper = useSwiper();
    return (
        <div className={`flex items-center gap-2`}>
            <div onClick={() => swiper.slidePrev()}>
                <ButtonUI>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6016 1.5L1.60156 10L10.6016 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </ButtonUI>
            </div>

            <div onClick={() => swiper.slideNext()}>
                <ButtonUI>
                    <svg className='rotate-180' width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6016 1.5L1.60156 10L10.6016 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </ButtonUI>
            </div>
        </div>
    )
}

export default CustomNavigation