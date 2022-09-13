
    export default function getOperatorName(operator)
    {
        if (
            operator.substr(0, 3) === '018'
            || operator.substr( 0, 5) === '88018'
            || operator.substr( 0, 6) === '+88018'
        ) {
            return 'robi';
        } else if (
            operator.substr(0, 3) === '016'
            || operator.substr( 0, 5) === '88016'
            || operator.substr( 0, 6) === '+88016'
        ) {
            return 'airtel';
        } else if (
            operator.substr(0, 3) === '019'
            || operator.substr( 0, 5) === '88019'
            || operator.substr( 0, 6) === '+88019'
        ) {
            return 'blink';
        } else if (
            operator.substr(0, 3) === '014'
            || operator.substr( 0, 5) === '88014'
            || operator.substr( 0, 6) === '+88014'
        ) {
            return 'blink';
        } else if(
            operator.substr(0, 3) === '017'
            || operator.substr( 0, 5) === '88017'
            || operator.substr( 0, 6) === '+88017'
        ){
            return 'gp';
        } else if(
            operator.substr(0, 3) === '013'
            || operator.substr( 0, 5) === '88013'
            || operator.substr( 0, 6) === '+88013'
        ){
            return 'gp';
        }else {
            return 'NO_MSISDN';
        }
    }

