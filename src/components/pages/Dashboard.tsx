import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchUserProjects } from "../../store/slices/userProjectsSlice";
import { flexCenterCenter, flexCenterStart } from "../../styles/styledHelpers";
import ModalWindow from "../common/ModalWindow";
import AddProjectButton from "../features/Dashboard/AddProjectButton";
import CreateProjectForm from "../features/Dashboard/CreateProjectForm";
import ProjectButton from "../features/Dashboard/ProjectButton";
import Logo from "../ui/Logo";
import Spinner from "../common/Spinner";

const StyledDashboard = styled.div`
  ${flexCenterStart}
  flex-direction: column;
  padding: 10rem 5rem 15rem;
  background-color: var(--bg-gray-1);
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Message = styled.p`
  font-size: var(--fs-l2);
  font-weight: 400;
`;

const Container = styled.div`
  ${flexCenterCenter}
  flex-direction: column;
  margin-top: auto;
  height: 24rem;
`;

const ButtonContainer = styled.div`
  border-radius: var(--br-m);
  ${flexCenterCenter}
  gap: 2rem;
  padding: 2rem;
  max-width: 100rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

function Dashboard() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { userProjects: projects, loading } = useAppSelector(
    (state) => state.userProjects
  );
  const { profileId } = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUserProjects(profileId));
  }, [profileId, dispatch]);

  return (
    <>
      <StyledDashboard>
        <Logo size="20rem" />
        <Container>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {!projects?.length ? (
                <Message>У вас нет созданных проектов</Message>
              ) : (
                <ButtonContainer>
                  {projects?.map((project) => (
                    <ProjectButton project={project} key={project.id} />
                  ))}
                </ButtonContainer>
              )}
            </>
          )}
        </Container>
        <AddProjectButton onClick={() => setIsOpen(true)} />
      </StyledDashboard>
      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateProjectForm onClose={() => setIsOpen(false)} />
      </ModalWindow>
    </>
  );
}

export default Dashboard;
