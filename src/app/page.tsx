
import Link from "next/link";
import Image from "next/image";
import ProfileForm from "@/components/form/ProfileForm";
export default function Home() {
  return (
    <div className="">

      <div className="flex-col w-[95%] mx-auto mt-5 px-3">

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-6">
          <div className="p-4  rounded-3xl bg-white lg:col-span-2">
            <div className="flex justify-between">
              <div className="flex gap-5 md:gap-10 items-center" >

                <div className="profileImageContainer w-25 h-25 md:w-40 md:h-40 rounded-full">

                  <Image src={"/user.jpg"} width={150} height={150} alt="userImage" className="object-cover rounded-full w-full h-full" />

                </div>

                <div className="userData">
                  <h2 className="font-semibold text-2xl mb-3">omar</h2>
                  <ul className="">

                    <li className="mb-2">
                      <p className="text-gray-400">Email:<span className=" text-black ml-2">omar@gmail.com</span></p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-400">Address:<span className="text-black  ml-2">Ramallah</span></p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-400">Phone:<span className="text-black  ml-2">701-696-6591</span></p>
                    </li>

                  </ul>





                </div>


              </div>
              <div className="flex items-center justify-between flex-col gap-2.5">
                <Link href={"https://www.linkedin.com/in/yahya-al-ayaseh-6181a8220/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADeOr3QBcCTn8xW6nLnCMw8Dpg4Cw19tMlA"} className="w-10 h-10 md:w-12 md:h-12  bg-purple-500 text-white rounded-full flex items-center justify-center" target="_blank">
                  <Image src="/facebook.png" width={90} height={90} alt="icon" className="w-6 h-6" />
                </Link>
                <Link href={"https://www.linkedin.com/in/yahya-al-ayaseh-6181a8220/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADeOr3QBcCTn8xW6nLnCMw8Dpg4Cw19tMlA"} className="w-10 h-10 md:w-12 md:h-12  bg-purple-500 text-white rounded-full flex items-center justify-center" target="_blank">
                  <Image src="/linkedin.png" width={90} height={90} alt="icon" className="w-6 h-6" />
                </Link>
                <Link href={"https://www.linkedin.com/in/yahya-al-ayaseh-6181a8220/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADeOr3QBcCTn8xW6nLnCMw8Dpg4Cw19tMlA"} className="w-10 h-10 md:w-12 md:h-12  bg-purple-500 text-white rounded-full flex items-center justify-center" target="_blank">
                  <Image src="/instagram.png" width={90} height={90} alt="icon" className="w-6 h-6" />
                </Link>

              </div>
            </div>
          </div>
          <div className=" p-4  rounded-3xl bg-white">

            <h2 className="text-lg font-semibold text-gray-800">Payment details</h2>
            <label className="block text-gray-600 mt-2 text-sm">Card number:</label>
            <div className="mt-1 p-2 bg-gray-100 rounded-lg text-gray-500 text-lg flex items-center">
              236 ••• ••• 265
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="p-2 bg-gray-100 rounded-lg flex justify-center">
                <Image width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_Western_Union.svg/640px-Logo_Western_Union.svg.png" alt="Western Union" className="h-6" />
              </div>
              <div className="p-2 bg-gray-100 rounded-lg flex justify-center">
                <Image width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Add_to_Google_Wallet_badge.svg/640px-Add_to_Google_Wallet_badge.svg.png" alt="Google Pay" className="h-6" />
              </div>
              <div className="p-2 bg-gray-100 rounded-lg flex justify-center">
                <Image width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-6" />
              </div>
              <div className="p-2 bg-gray-100 rounded-lg flex justify-center">
                <Image width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
              </div>
            </div>






          </div>




        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-5">

          <div className="p-4  rounded-3xl bg-white lg:col-span-2">

            <ProfileForm />

          </div>


        </div>
      </div>

    </div>
  );
}
