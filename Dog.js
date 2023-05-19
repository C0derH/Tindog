class Dog {
    constructor(data){
        Object.assign(this,data)
        this.badgeImg = ""
    }

    getLiked(){
        this.badgeImg = '<img class="badge" src="images/badge-like.png">'
    }
    getRejected(){
        this.badgeImg = '<img class="badge" src="images/badge-nope.png">'
    }

    getDogHtml(){
        const {name,avatar,age,bio,badgeImg} = this
        return `
            <div class="profile-info" style = "background-image:url(${avatar})">
                <div class="profile-body"">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                    ${badgeImg ? badgeImg : ""}
                </div>
            </div>
        `
    }
}


export default Dog

