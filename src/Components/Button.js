import { Button } from '@material-ui/core';

export default function ButtonComp(props){
    return(
        <Button
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
        >
            {props.children}
        </Button>
    )
}