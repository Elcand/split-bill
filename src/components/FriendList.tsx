import Friend from "./Friend";

export default function FriendList({ friends, onSelected }: any) {
  return (
    <ul>
      {friends.map((friend: any) => (
        <Friend key={friend.id} friend={friend} onSelected={onSelected} />
      ))}
    </ul>
  );
}
