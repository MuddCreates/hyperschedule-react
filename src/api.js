export const HyperscheduleApi = {
  fetch_courses () {
    return fetch("https://hyperschedule.herokuapp.com/api/v1/all-courses")
      .then(httpStatusHelper)
      .then(response => response.json())
      .catch(error => error)
      .then(data => {
        return data;
      });
  }
};


function httpStatusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}


const courseKeyFields = ['school', 'department', 'courseNumber', 'courseCodeSuffix', 'section'];
export function computeCourseKey (course) {
  var key = [];
  for (let field of courseKeyFields) {
    key.push(course[field]);
  }
  return key.join(String.fromCharCode(31));
}


export default HyperscheduleApi;
