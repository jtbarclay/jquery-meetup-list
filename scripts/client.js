// console.log('js');
// console.log('jquery', $);

$(readyNow);

let meetupId = 0;
let meetupCount = 0;

function addMeetup() {
    $('#meetupsTableBody').append(`<tr id="row${meetupId}"><td>${$('#newGroupInput').val()}</td><td>${$('#dateInput').val()}</td><td><button class="deleteButtons" id="deleteButton${meetupId}">Delete</button></td></tr>`);
    meetupId++;
    meetupCount++;
    console.log(`In addMeetup: meetupId = ${meetupId} meetupCount = ${meetupCount}`);
    domCount();
}

function removeMeetup(){
    console.log('delete click');
    $(this).closest('tr').remove();
    meetupCount--;
    domCount();
}

function domCount(){
    $('#counter').text(`Total Meetups: ${meetupCount}`);
}

function readyNow() {
    //listen for Add Meetup button press
    $('#addMeetupButton').click(addMeetup);
    //listen for Delete button press
    $('tbody').on('click', '.deleteButtons', removeMeetup);
    domCount();
}