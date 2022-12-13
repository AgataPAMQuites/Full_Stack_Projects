import { ReactComponent as back }  from './svgs/back.svg'
import { ReactComponent as profile }  from './svgs/profile.svg'
import { ReactComponent as arrowLeft }  from './svgs/arrowl.svg'
import { ReactComponent as arrowR }  from './svgs/arrowr.svg'

const icons = {
    back,
    profile,
    arrowLeft,
    arrowR
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props} />
}