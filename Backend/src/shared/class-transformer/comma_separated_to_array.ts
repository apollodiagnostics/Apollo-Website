import { Transform } from 'class-transformer';

function CommaSeparatedToArray() {
    return Transform(({ value }) => {
        if (typeof value === 'string') {
            return value.split(',').map((part) => part.trim());
        }
        return value;
    });
}

export default CommaSeparatedToArray;
