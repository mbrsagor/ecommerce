import Image from "next/image";

function Header(){
    return(
        <div>
            <h2>Header</h2>
            {/* Left */}

            <div>
                
                <Image src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
                alt="Picture of the author"
                width={50}
                height={50}/>
            </div>

            {/* Center */}
            {/* Right */}
        </div>
    )
}

export default Header;
