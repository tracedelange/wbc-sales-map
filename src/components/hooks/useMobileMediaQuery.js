import { useMediaQuery } from '@material-ui/core'

const useMobileMediaQuery = () => {
    const matches = useMediaQuery('(max-width: 600px)');
    return matches
}

export default useMobileMediaQuery;