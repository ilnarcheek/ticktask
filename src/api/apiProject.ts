import supabase from "./supabase";

type TProject = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
};

export async function createProject(project: TProject, profileId: string) {
  const { title, description, startDate, endDate } = project;
  console.log(title, description, startDate, endDate);

  const { data, error } = await supabase
    .from("projects")
    .insert([
      {
        title: title,
        description: description,
        start_date: startDate,
        end_date: endDate,
        created_by: profileId,
      },
    ])
    .select();

  if (error) {
    console.error("Ошибка при создании проекта:", error);
  } else {
    console.log("Проект создан:", data);
  }
}

export async function getUserProjects(profileId: string) {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("id, title, description, start_date, end_date")
    .eq("created_by", profileId);

  if (error) {
    console.error("Ошибка при получении проектов:", error);
    return [];
  }

  return projects || [];
}

export async function getProjectData(projectId: string) {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
    id,
    title,
    description,
    start_date,
    end_date,
    blocks (
      id,
      title,
      tasks (
        id,
        title,
        description,
        task_assignees (
          user_id
        )
      )
    )
  `
    )
    .eq("id", projectId);

  if (error) {
    console.error("Ошибка при получении информации о проекте:", error);
  } else {
    console.log("Данные проекта:", data);
  }
}

export async function getProjectBlocks(projectId: string) {
  const { data: blocks, error } = await supabase
    .from("blocks")
    .select("*")
    .eq("project_id", projectId);

  if (error) {
    console.error("Ошибка при получении блоков:", error);
    return [];
  }

  return blocks;
}
