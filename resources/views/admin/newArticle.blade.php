@extends('Layouts.admin_layout')


@section('head')
    <link rel="stylesheet" type="text/css" href="/css/for_guest.css">
@endsection


@section('content')
	
    @if ($errors->any())
		<div class="alert alert-danger">
			<div class="test">
				@foreach ($errors->all() as $error)
					<div class="tstf">{{ $error }}</div>
				@endforeach
			</div>
		</div>
	@endif

    <form class="guestform" method="post" enctype="multipart/form-data" name="guestform" onsubmit="return checkguest();" action="/admin/newArticle">
        @csrf
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        
        <div class="guestform__row">
            <input type="text" id="title" name="title" placeholder="Title" value="{{ old("title") }}">
            <textarea cols="50" rows="4" type="text" id="text" name="text" placeholder="Text">{{ old("text") }}</textarea>
            <input type="text" id="video" name="video" placeholder="YouTube link" value="{{ old("video") }}">
            <input type="file" id="file" name="file" value="{{ old("file") }}">

            <button class="btn" type="submit">Отправить!</button>
        </div>

    </form>
@endsection
