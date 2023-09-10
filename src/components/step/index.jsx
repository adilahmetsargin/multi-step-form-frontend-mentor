import React from "react";
import * as S from "./styled";

const Step = ({
  onBack,
  handleSubmit,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
}) => {
  return (
    <S.Step onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.StepTitle>{title}</S.StepTitle>
        <S.StepSubtitle>{subtitle}</S.StepSubtitle>
      </S.StepHeader>
      <S.StepBody>{children}</S.StepBody>
      <S.StepFooter>
        {hasBackButton && (
          <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>
        )}
        {hasNextButton ? (
          <S.GoNextButton type="submit">Next Step</S.GoNextButton>
        ) : (
          <S.GoNextButton type="submit">Confirm</S.GoNextButton>
        )}
      </S.StepFooter>
    </S.Step>
  );
};

export default Step;
