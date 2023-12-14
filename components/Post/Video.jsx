export default ({ reel: { id } }) => (
   <div>
        <video
            poster={`/api/thumb/${id}`}
            // autoPlay
            muted
            className="row-span-full col-span-full"
            // src={url}
        />
        <div className="overlay row-span-full col-span-full flex flex-col">
            <div className="controls grow"></div>
            {/* <Indicators items={images} current={index} /> */}
        </div>
   </div>
)