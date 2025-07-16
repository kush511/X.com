import { prisma } from "../src/prisma";
import { faker } from "@faker-js/faker";



async function main() {
  const users = [];

  // 👥 Create 5 users
  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        username: faker.internet.username().toLowerCase() + i,
        displayName: faker.person.fullName(),
        bio: faker.lorem.sentence(),
        avatar: faker.image.avatar(),
        coverPicture: faker.image.urlPicsumPhotos(),
        location: faker.location.city(),
        job: faker.person.jobTitle(),
        website: faker.internet.url(),
      },
    });

    users.push(user);

    // 📝 Create 2 posts for each user
    for (let j = 0; j < 2; j++) {
      await prisma.post.create({
        data: {
          desc: faker.lorem.paragraph(),
          img: faker.image.urlPicsumPhotos(),
          isSensitive: faker.datatype.boolean(),
          userId: user.id,
        },
      });
    }
  }

  // ❤️ Random likes
  const allPosts = await prisma.post.findMany();
  for (const post of allPosts) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    try {
      await prisma.like.create({
        data: {
          userId: randomUser.id,
          postId: post.id,
        },
      });
    } catch (e) {
      // Skip duplicate like error
    }
  }

  // 🔖 Random saves
  for (const post of allPosts) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    try {
      await prisma.save.create({
        data: {
          userId: randomUser.id,
          postId: post.id,
        },
      });
    } catch (e) {
      // Skip duplicate save error
    }
  }

  // 👥 Random follow relationships
  for (let i = 0; i < users.length; i++) {
    const follower = users[i];
    const following = users[(i + 1) % users.length];
    if (follower.id !== following.id) {
      await prisma.follow.create({
        data: {
          followerId: follower.id,
          followingId: following.id,
        },
      });
    }
  }
}

main()
  .then(() => {
    console.log("🌱 Seeded successfully");
    return prisma.$disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding error:", err);
    return prisma.$disconnect().then(() => process.exit(1));
  });
