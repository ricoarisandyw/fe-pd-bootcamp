import IconDropdown from "../icon/IconDropdown"

interface DropdownProps {
    options: string[]
}

export default function Dropdown(props: DropdownProps) {
    return <div className="relative w-[170px]">
        <select className="w-full text-black px-[20px] py-[12px] rounded-[6px] bg-white text-[14px] font-medium">
            {props.options.map((opt) => <option className="text-black" key={opt}>{opt}</option>)}
        </select>
        <div className="absolute right-0 top-0 p-[7.5px] mt-[12px] mr-[20px]">
            <IconDropdown />
        </div>
    </div>
}