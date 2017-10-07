/**
 * Created by julian.bock on 2017-10-07.
 */

const userPath = "users/" +window.activeUser.uid+ "/";
const userKeys = [
    "Name",
    "Description",
    "Picture",
    "isCompany"
];

const userEnvironmentPath = userPath +"Environment/";
const userEnvironmentKeys = [
    "Learning",
    "Challenge",
    "Recognition",
    "ProfessionalGrowth",
    "Teamwork",
    "Familiarity",
    "SecurityBenefits",
    "Diversity",
    "Sustainability",
    "FreeCoffee"
];

const userSoftSkillPath = userPath +"SoftSkills/";
const userSoftSkillKeys = [
    "Communication",
    "MeetingPeople",
    "Presenting",
    "Teamwork",
    "QuickLearner",
    "StressManagement",
    "Adaptability",
    "CriticalThinking",
    "Creativity",
    "Decision Making"
];

const userTechSkillPath = userPath +"TechSkills/";
const userTechSkillKeys = [
    "Coding",
    "Architecture",
    "Mathematics",
    "Writing",
    "GraphicDesign",
    "Databases",
    "WebDesign",
    "Accounting",
    "Hardware",
    "Legal"
];

const userHardSkillPath = userTechSkillPath;
const userHardSkillKeys = userTechSkillKeys;

/*
const positionPath = "positions/" +window.activeUser.uid+ "/" +positionId+ "/";
const positionKeys = [
    "Title",
    "Description",
]; */

// const positionSoftSkillPath = positionPath +"SoftSkills/";
const positionSoftSkillKeys = userSoftSkillKeys;

// const positionTechSkillPath = positionPath +"TechSkills/";
const positionTechSkillKeys = userTechSkillKeys;

// const positionHardSkillPath = positionTechSkillPath;
const positionHardSkillKeys = positionTechSkillKeys;