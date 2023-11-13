export default ({ url }) => (
   <div>
        <video
            // autoPlay
            muted
            className="row-span-full col-span-full"
            src={url}
        />
        <div className="overlay row-span-full col-span-full flex flex-col">
            <div className="controls grow"></div>
            {/* <Indicators items={images} current={index} /> */}
        </div>
   </div>
)