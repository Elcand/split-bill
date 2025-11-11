import Friend from "./Friend";

export default function FriendList({ friends }: any) {
  return (
    <ul>
      {friends.map((friend: any) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
