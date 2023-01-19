import Image from "next/image"
import List from "./List"

const Indicators = ({ items, current }) => (
    <List
        className="indicators flex justify-center gap-x-2 p-4"
        items={items}
        itemHandler={(item, index) => (
            <div 
                key={index} 
                className={`indicator w-2 h-2 rounded-full border ${current === index ? "bg-white" : ""}`}
            ></div>
        )}
    />
)

export default ({ images }) => {
    
    return (
        <div className="image-viewer">
            <List
                className="flex overflow-x-scroll snap-x snap-mandatory"
                items={images}
                itemHandler={({ url, width, height }, index) => (
                    <li key={index} className="post-image grid justify-center shrink-0 w-full snap-start snap-always">
                        <Image
                            alt=""
                            className="row-span-full col-span-full"
                            src={url}
                            width={width}
                            height={height}
                            style={{
                                height: "100%",
                                // width: "100%",
                                objectFit: "cover"
                            }}
                        />
                        <div className="overlay row-span-full col-span-full flex flex-col">
                            <div className="controls grow"></div>
                            {/* <Indicators items={images} current={index} /> */}
                        </div>
                    </li>
                )}
            />
        </div>
    )
}