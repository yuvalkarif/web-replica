export function seedDatabase(firebase) {
  const users = [
    {
      userId: "bmxcUk2TvAYrbmvPisqMr8stjFG2",
      username: "yuval_karif",
      fullName: "Yuval Karif",
      emailAddress: "yuvalkarif3@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "tamar_kahanov",
      fullName: "Tamar Kahanov",
      emailAddress: "tamarkahanov@gmail.com",
      following: [],
      followers: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "sambenjamin",
      fullName: "Sam Brink",
      emailAddress: "oxedom@gmail.com",
      following: [],
      followers: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 3; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `Components/Template/Photos/pic${i}.jpg`,
        caption: "sheesh",
        likes: [],
        comments: [
          {
            displayName: "sambenjamin",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "tamar_kahanov",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}

export function updateDatabaseUser(firebase) {
  firebase
    .firestore()
    .collection("users")
    .add({
      userId: "5",
      username: "royi_ashtar",
      fullName: "Royi Ashtar",
      emailAddress: "royiashtar@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
      profilePic: "https://i.imgur.com/lnTqvX7.png",
      description: ["20yo,grinding in the idf  💪🌊 ,herzliya kipuah "],
    });
}
export function updateDatabasePhoto(firebase) {
  firebase
    .firestore()
    .collection("photos")
    .add({
      photoId: "4",
      userId: "3",
      imageSrc: `https://i.imgur.com/dQRMCg1.png`,
      caption: "ad matai JS aug21",
      likes: [],
      comments: [
        {
          displayName: "tamar_kahanov",
          comment: "shaboor",
        },
      ],
      userLatitude: "40.7128°",
      userLongitude: "74.0060°",
      dateCreated: Date.now(),
    });
}
