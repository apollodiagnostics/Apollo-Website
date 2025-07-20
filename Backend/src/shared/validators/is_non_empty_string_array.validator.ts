import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from 'class-validator';

export function IsNonEmptyStringArray(
    minLength = 1,
    withPrefix?: string,
    validationOptions?: ValidationOptions,
) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            name: 'isNonEmptyStringArray',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [{ minLength, withPrefix }],
            options: validationOptions,
            validator: {
                validate: (value: string[], args: ValidationArguments) => {
                    if (!Array.isArray(value)) return false;

                    const prefixValue = args.constraints[0].withPrefix;
                    if (prefixValue) {
                        const isValidValues = value.reduce((val, curr) => {
                            return val && !curr.split(prefixValue)[0];
                        }, true);

                        if (!isValidValues) return false;
                    }

                    return value.length >= args.constraints[0].minLength;
                },
                defaultMessage: (args: ValidationArguments) => {
                    if (!Array.isArray(args.value)) {
                        return `${args.property} should be a list of entries`;
                    }

                    const prefixValue = args.constraints[0].withPrefix;

                    if (prefixValue) {
                        const values = args.value.filter(
                            (item) => !!item.split(prefixValue)[0],
                        );
                        return `${values} value is an invalid`;
                    }

                    return `Minimum of ${args.constraints[0].minLength} entries are required for ${args.property}`;
                },
            },
        });
    };
}
