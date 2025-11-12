import Friend from "./Friend";

export default function FriendList({
  friends,
  onSelected,
  selectedFriend,
}: any) {
  return (
    <ul>
      {friends.map((friend: any) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
