type SecondaryButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function SecondaryButton(props: SecondaryButtonProps){
    return <button {...props} className={props.className + " font-inter font-medium text-[12px] px-[16px] py-[10px] rounded text-system border-[1.5px] border-solid border-system"}>
        {props.children}
    </button>
}