/**
 * simple overiding button style. you could have your core style but still able to customize the stile.
 * warning!!!: since class name is joined then it could be crash between class.
 */
type PrimaryButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function PrimaryButton(props: PrimaryButtonProps){
    return <button {...props} className={props.className + " font-inter font-medium text-[12px] bg-system px-[16px] py-[10px] rounded"}>
        {props.children}
    </button>
}