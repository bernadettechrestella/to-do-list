import axios from "axios";

//get all activity
export const getActivities = (callback) => {
    axios
    // .get('https://todo.api.devcode.gethired.id/activity-groups')
    .get('https://todo.api.devcode.gethired.id/activity-groups?email=bernadettechrestella%40gmail.com')
    .then((res) => {
        callback(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

//get detail acivity
export const getActivityById = (id, callback) => {
    axios
        .get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

//create new activity
export const createActivity = (title = "New Activity", email= "bernadettechrestella@gmail.com", callback) => {
    const data = {
        title: title,
        email: email,
        _comment: "Aktivitas baru"
    }
    console.log("createActivity"+ data)

    axios
        .post('https://todo.api.devcode.gethired.id/activity-groups', data)
        .then((res) => {
            callback(res.data)
            console.log("createActivity"+ res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

//delete activity
export const deleteActivity = (id, callback) => {
    axios
    .delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
    .then((res) => {
        callback(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const updateActivity = (id, newData, callback) => {
  axios
    .put(`https://todo.api.devcode.gethired.id/activity-groups/${id}`, newData)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}