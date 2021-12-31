import { useMediaQuery } from '@mui/material'

const useMobileMediaQuery = () => {
    const matches = useMediaQuery('(max-width: 600px)');
    return matches
}

export default useMobileMediaQuery;