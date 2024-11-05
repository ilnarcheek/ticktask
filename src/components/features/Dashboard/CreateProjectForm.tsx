import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { createProject } from "../../../api/apiProject";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchUserProjects } from "../../../store/slices/userProjectsSlice";
import Button from "../../common/Button";
import CustomDatePicker from "../../common/CustomDatePicker";
import InputContainer from "../../common/InputContainer";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: var(--fc-black);
  width: 40rem;
`;

const Header = styled.span`
  font-size: var(--fs-l2);
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & input {
    padding: 1rem 1.5rem;
    background-color: var(--bg-gray-1);
    color: var(--fc-black);
    border-radius: var(--br-s);
    font-size: var(--fs-m);
  }
`;

const CheckBoxContainer = styled.div`
  padding: 1rem;
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;

const EndDateContainer = styled.div`
  display: flex;
`;

interface CreateProjectFormProps {
  onClose: () => void;
}

interface FormData {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
}

function CreateProjectForm({ onClose }: CreateProjectFormProps) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  });
  const { profileId } = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [isEndDateDisabled, setIsEndDateDisabled] = useState(false);

  const toggleEndDate = () => {
    setIsEndDateDisabled((state) => !state);
    setValue("endDate", isEndDateDisabled ? new Date() : null);
  };

  const submitForm = async (data: FormData) => {
    await createProject(data, profileId);
    await dispatch(fetchUserProjects(profileId));
    onClose();
  };

  return (
    <FormContainer>
      <Header>Создание проекта</Header>
      <Form onSubmit={handleSubmit(submitForm)}>
        <InputContainer
          label="Название"
          htmlFor="title"
          message={errors.title?.message}
        >
          <input
            {...register("title", { required: "Это поле обязательное" })}
            type="text"
            id="title"
          />
        </InputContainer>
        <InputContainer label="Описание" htmlFor="description">
          <input {...register("description")} type="text" id="description" />
        </InputContainer>

        <InputContainer label="Дата начала" htmlFor="startDate">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <div>
                <CustomDatePicker id="startDate" {...field} />
              </div>
            )}
          />
        </InputContainer>

        <EndDateContainer>
          <InputContainer label="Дата окончания" htmlFor="endDate">
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <div>
                  <CustomDatePicker
                    id="endDate"
                    disabled={isEndDateDisabled}
                    {...field}
                  />
                </div>
              )}
            />
          </InputContainer>
          <CheckBoxContainer>
            <input
              id="noEndDate"
              type="checkbox"
              checked={isEndDateDisabled}
              onChange={toggleEndDate}
            />
            <label htmlFor="noEndDate">Без даты окончания</label>
          </CheckBoxContainer>
        </EndDateContainer>
        <Button icon={false}>Создать проект</Button>
      </Form>
    </FormContainer>
  );
}

export default CreateProjectForm;
