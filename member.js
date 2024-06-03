function skillsMember(){
    var member = document.getElementById('member').value;
    var memberSkills = document.getElementById('memberSkills').value;
    var memberExperience = document.getElementById('memberExperience').value;
    var memberRole = document.getElementById('memberRole').value;

    var memberSkillsArray = memberSkills.split(",");
    var memberExperienceArray = memberExperience.split(",");
    var memberRoleArray = memberRole.split(",");

    var memberData = {
        "member": member,
        "skills": memberSkillsArray,
        "experience": memberExperienceArray,
        "role": memberRoleArray
    }
    return memberData;
}