import BtnBeigie from '../../UI/BtnBeigie'
import forms from '../../assets/images/home/forms.webp'

function ContactUs() {
  return (
    <div className="container max-w-[1480px]">
          <div className="flex flex-col-reverse md:flex-row bg-blue lg:gap-[200px]">

            <div className="grow-[3] shrink-[4] py-4 px-[25px] xsm:p-10 md:p-[60px]">
              <h2 className="heading-2 text-black font-Jost break-words mb-5 sm:mb-[30px] md:mb-[50px]">Остались вопросы? Свяжитесь с нами</h2>

              <div className="flex flex-col gap-5 w-full body-18 font-Jost text-black">
                <div className="w-full group relative">
                  <label className="block label duration-300 absolute top-2 group-hover:-top-3">ФИО <span className="text-red">*</span></label>
                  <input
                    type="text"
                    className="block border-b border-black-20 w-full outline-none bg-transparent p-2"
                  />
                </div>

                <div className="w-full group relative">
                  <label className="block label duration-300 absolute top-2 group-hover:-top-3">Номер телефона <span className="text-red">*</span></label>
                  <input
                    type="text"
                    className="block border-b border-black-20 w-full outline-none bg-transparent p-2"
                  />
                </div>

                <div className="w-full group relative">
                  <label className="block label duration-300 absolute top-2 group-hover:-top-3">E-mail</label>
                  <input
                    type="text"
                    className="block border-b border-black-20 w-full outline-none bg-transparent p-2"
                  />
                </div>

                <div className="w-full group relative">
                  <label className="block label duration-300 absolute top-2 group-hover:-top-3">Ваш вопрос</label>
                  <input
                    type="text"
                    className="block border-b border-black-20 w-full outline-none bg-transparent p-2"
                  />
                </div>
              </div>

              <div className="mt-[30px]">
                <BtnBeigie>Отправить</BtnBeigie>
              </div>
            </div>

            <div className="grow-[2] lg:shrink-[1] shrink-1">
              <img src={forms} alt="forms image" className="block w-full h-full object-cover" />
            </div>
          </div>
        </div>
  )
}

export default ContactUs