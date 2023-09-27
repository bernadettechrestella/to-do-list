import axios from "axios";

export const getActivities = (callback) => {
    axios
    .get('https://todo.api.devcode.gethired.id/activity-groups')
    .then((res) => {
        callback(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

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

export const createActivity = (newActivity, callback) => {
    axios
    .post('https://todo.api.devcode.gethired.id/activity-groups', newActivity)
    .then((res) => {
        callback(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

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