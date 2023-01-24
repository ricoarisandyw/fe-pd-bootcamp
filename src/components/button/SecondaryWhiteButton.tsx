type SecondaryButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function SecondaryWhiteButton(props: SecondaryButtonProps){
    return <button {...props} className={props.className + " font-inter font-medium text-[12px] px-[16px] py-[10px] rounded text-white border-[1.5px] border-solid border-white"}>
        {props.children}
    </button>
}