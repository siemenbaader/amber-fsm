Smalltalk current createPackage: 'FSM'!
Object subclass: #StateMachine
	instanceVariableNames: 'currentState stateTable assigningState'
	package: 'FSM'!
!StateMachine commentStamp!
A Finite State Machine Example. 

| door |

door := (StateMachine new) 
	when: 'closed' ;
		on: 'open' do: [window alert: 'opening'. 'open' ] ;
		on: 'lock' do: [window alert: 'locked door.'. 'locked'] ;
		on: 'unlock' do: [window alert: 'already unlocked'. 'closed' ] ;
		on: 'close' do: [window alert: 'already closed'. 'closed'] ;
		
	when: 'locked' ;
		on: 'open' do: [window alert: 'Door is locked, sorry'. 'locked' ] ;
	
	initialState: 'closed' ;
	
	yourself.
	
window alert: 'Door is ', door state.
	
door trigger: 'lock' ; trigger: 'open'; trigger: 'unlock'.

window alert: 'Door is ', door state.!

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
	| targetState |
	
	targetState := ((stateTable at: currentState) at: anEvent) value.
	(stateTable keys includes: targetState) 
		ifTrue: [ currentState := targetState ]
		ifFalse: [ Object throw: 'Block returned ''', targetState asString, ''', but must return one of the valid states configured by #when.']
!

when: aState
	assigningState := aState.
	stateTable at: aState put: Dictionary new.
! !

