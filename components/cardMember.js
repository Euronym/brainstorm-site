import Image from "next/image";

export default function CardMember({ memberInfo }) {
    return (
        <div className="container">
            <Image
                src={memberInfo.image_path}
                height={400}
                width={250}
            />
            <div className="text">
                <h4>{memberInfo.name}</h4>
                <p>{memberInfo.role}</p>
            </div>
            <style jsx>
            {
                `
                   .container{
                       margin-right: 30px;
                       background-color: yellow;
                       height: 500px;
                       width: 250px;
                       border-style: solid;
                       border-radius: 5px;
                       border-color: yellow;
                   } 
                   .text{
                       text-align: center;
                   }
                   h4{
                        color: purple;
                   }
                `
            }
            </style>
        </div>
    );
}