Smalltalk current createPackage: 'FSM'!
Object subclass: #FSM
	instanceVariableNames: ''
	package: 'FSM'!
!FSM commentStamp!
| backendConnection  it |
backendConnection := FSM new.
it := backendConnection .

it when: 'idle' ;  on: 'connect' do: [...] ; on: 'close' do: [..] ; on: 'send' do: []; on: 'data' do: [..] ;
it when 'connecting' ;
		on: 'connect' do: [...] ; on: 'close' do: [..].
it when 'closing' ;
		                                                                 on: 'send' do: []; on: 'data' do: [..] .
it when 'lost' ;
		on: 'connect' do: [...] ; on: 'close' do: [..] ; on: 'send' do: []; on: 'data' do: [..] .


backendConnection trigger: 'connect'



stateTable                    on: 'connect' ; on: 'foo'; on: 'bar' ;
when: 'idle'                   do: [. 'idle' ]   ; do: [ 4 + 7   ]
when: 'connecting' ;     do: [ ]!

Object subclass: #StateMachine
	instanceVariableNames: 'currentState stateTable assigningState'
	package: 'FSM'!

!StateMachine methodsFor: 'not yet classified'!

initialState: aString
	currentState := aString.
!

initialize
	stateTable := Dictionary new.
!

on: anEvent do: actions
	(stateTable at: assigningState)
		at: anEvent put: actions.
!

state
	^ currentState.
!

trigger: anEvent
	currentState := ((stateTable at: currentState) at: anEvent) value.
!

when: aState
	assigningState := aState.
	stateTable at: aState put: Dictionary new.
! !

