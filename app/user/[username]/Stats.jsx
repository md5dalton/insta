import UList from "@/components/UList"
import Stat from "./Stat"

export default ({ values }) => (
    <UList
        className="flex grow justify-around"
        items={values}
        itemHandler={item => <Stat {...item} />}
    />
)