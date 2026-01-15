import React from "react";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import { TextFieldComponent } from "#common/components";
import { formValidation } from "./character.validations";
import { Character } from "./character.vm";
import * as classes from "./character.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  const handleSubmit = (values: Character) => {
    onSave(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, isSubmitting }) => {
        return (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="Name" />
            <TextFieldComponent name="status" label="Status" />
            <TextFieldComponent name="type" label="Type" />
            <TextFieldComponent name="gender" label="Gender" />
            <TextFieldComponent name="species" label="Species" />
            <TextFieldComponent name="origin.name" label="Origin Name" />
            <TextFieldComponent name="origin.url" label="Origin URL" />
            <TextFieldComponent name="location.name" label="Location Name" />
            <TextFieldComponent name="location.url" label="Location URL" />
            <TextFieldComponent name="bestSentence" label="Best Sentence" />

            <div>
              <TextFieldComponent name="image" label="Image URL" />
              {values.image && (
                <div className={classes.imagePreview}>
                  <img
                    src={values.image}
                    alt={values.name || "Character"}
                    className={classes.characterImage}
                  />
                </div>
              )}
            </div>

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Episodes
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 0 }}>
                {Array.isArray(values.episode) ? (
                  values.episode.map((ep, idx) => <li key={idx}>{ep}</li>)
                ) : (
                  <li>{values.episode}</li>
                )}
              </Box>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
