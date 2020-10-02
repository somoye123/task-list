import Project from "../src/Project";

test("Project class", () => {
  const firstProject = new Project();
  console.log(firstProject);
  expect(1).toBe(1);
});
