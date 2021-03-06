import Joi from 'joi';

const hexRegex = /^#[a-zA-Z0-9]{6}$/;

const colorSchema = Joi.object().keys({
  hex: Joi.string()
    .regex(hexRegex)
    .required(),
  rgb: Joi.array()
    .items(Joi.number())
    .length(3)
    .required(),
});

const colorsSchema = Joi.object()
  .pattern(/[a-zA-z]/, colorSchema)
  .required();

const mainSchema = Joi.object()
  .length(30)
  .pattern(
    /[A-Z]{3}/,
    Joi.object().keys({
      fullName: Joi.string().required(),
      mainColor: colorSchema.required(),
      colors: colorsSchema,
    })
  );

const colorsListSchema = Joi.array().items(Joi.string().required());

export { mainSchema, colorSchema, colorsSchema, colorsListSchema };
