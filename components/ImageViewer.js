import Image from "next/image";
import List from "./List";

export default ({ images }) => (
    <div className="image-viewer">
        <List
            className="flex overflow-x-scroll"
            items={images}
            itemHandler={({ url, width, height }, index) => (
                <li key={index} className="post-image grid justify-center shrink-0 w-full">
                    <Image
                        className="row-span-full col-span-full"
                        src={url}
                        width={width}
                        height={height}
                        // fill
                    />
                    <div className="overlay row-span-full col-span-full bg-[#00000087]">
                        <div className="controls"></div>
                        <div className="indicators"></div>
                    </div>
                </li>
            )}
        />
    </div>
)