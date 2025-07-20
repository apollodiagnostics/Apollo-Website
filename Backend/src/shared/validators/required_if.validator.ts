import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from 'class-validator';

/**
 * @param0 Key name
 * @param1 value or array of value
 */
type Config = {
    property: string;
    requiredValue?: string[] | string;
    optionalValue?: string[] | string;
    type?: 'string' | 'number' | 'boolean' | 'object';
    onlyIf?: [string, string | string[]];
};

/**
 * Custom validation decorator that requires the decorated property
 * to have a value if a specific property meets certain conditions.
 *
 * @param config An array containing two strings: [checkAgainstProperty, propertyShouldHaveValue]
 * @param validationOptions Options used to pass to validation decorators.
 * @returns
 */
export function RequiredIf(
    config: Config,
    validationOptions?: ValidationOptions,
) {
    return (object: Record<string, any>, propertyName: string) => {
        registerDecorator({
            name: 'requiredIf',
            target: object.constructor,
            propertyName,
            constraints: [config],
            options: validationOptions,
            validator: {
                /**
                 * Validates the decorated property based on the dependent property and required value.
                 * @param value The value of the decorated property.
                 * @param args ValidationArguments containing object and constraints.
                 * @returns True if the validation condition is met, false otherwise.
                 */
                validate(value: any, args: ValidationArguments) {
                    const config = args.constraints[0] as Config;
                    const checkAgainstProperty = config.property;
                    const requiredValue = config.requiredValue ?? [];
                    const optionalValue = config.optionalValue ?? [];
                    const valueHasData = !!value;
                    const valueType = config.type ?? 'string';

                    const argsObj = args.object as any;

                    if (config.onlyIf) {
                        const onlyIfPropertyName = config.onlyIf[0];
                        let onlyIfPropertyValue = config.onlyIf[1];

                        onlyIfPropertyValue =
                            typeof onlyIfPropertyValue === 'string'
                                ? [onlyIfPropertyValue]
                                : onlyIfPropertyValue;

                        if (
                            !onlyIfPropertyValue.includes(
                                argsObj[onlyIfPropertyName],
                            )
                        ) {
                            return true;
                        }
                    }

                    if (value && typeof value !== valueType) {
                        return false;
                    }

                    const propertyShouldHaveValue =
                        typeof requiredValue === 'string'
                            ? [requiredValue]
                            : requiredValue;

                    const propertyMayHaveValue =
                        typeof optionalValue === 'string'
                            ? [optionalValue]
                            : optionalValue;

                    const propertyHasValue = argsObj[checkAgainstProperty];

                    const mustHaveValue =
                        propertyShouldHaveValue.includes(propertyHasValue);
                    const mayHaveValue =
                        propertyMayHaveValue.includes(propertyHasValue);

                    const final = mustHaveValue
                        ? valueHasData
                        : mayHaveValue
                        ? true
                        : !valueHasData;

                    return final;
                },
                defaultMessage: (args: ValidationArguments) => {
                    const config = args.constraints[0] as Config;
                    const valueType = config.type ?? 'string';

                    if (typeof args.value !== valueType) {
                        return `${args.property} must be a non empty ${valueType}`;
                    }

                    if (args.value) {
                        return `${args.property} is not valid property`;
                    }

                    return `${args.property} is required as`;
                },
            },
        });
    };
}
