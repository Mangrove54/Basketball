let hs=0
let gs=0
homeScore=document.getElementById("home-score")
guestScore=document.getElementById("guest-score")
function homeone()
{
    hs+=1
    console.log("+1 FOR HOME")
    homeScore.textContent=hs
}
function hometwo()
{
    hs+=2
    console.log("+2 FOR HOME")
    homeScore.textContent=hs
}
function homethree()
{
    hs+=3
    console.log("+3 FOR HOME")
    homeScore.textContent=hs
}
function awayone()
{
    gs+=1
    console.log("+1 FOR GUEST")
    guestScore.textContent=gs
}
function awaytwo()
{
    gs+=2
    console.log("+2 FOR GUEST")
    guestScore.textContent=gs
}
function awaythree()
{
    gs+=3
    console.log("+3 FOR GUEST")
    guestScore.textContent=gs
}
function reset()
{
    guestScore.textContent=0
    homeScore.textContent=0
}