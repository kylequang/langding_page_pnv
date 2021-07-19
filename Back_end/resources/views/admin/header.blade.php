  <!-- Navigation -->
  <nav style='background-color: rgb(163, 147, 147)' class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Passerellesnumeriques Viet Nam</a>
    </div>
    <!-- /.navbar-header -->
    <ul class="nav navbar-top-links navbar-right" style={{}}>
        <!-- /.dropdown -->
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                </li>
                <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                </li>
                <li class="divider"></li>
                <li><a href="logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                </li>
            </ul>
            <!-- /.dropdown-user -->
        </li>
        <!-- /.dropdown -->
    </ul>
    <ul class="nav navbar-top-links navbar-right">
        <!-- /.dropdown -->
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class="fas fa-bell"></i>  <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                </li>
                <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                </li>
                <li class="divider"></li>
                <li><a href="logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                </li>
            </ul>
            <!-- /.dropdown-user -->
        </li>
        <!-- /.dropdown -->
    </ul>

    
    <!-- /.navbar-top-links -->


    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li class="sidebar-search">
                    <div class="input-group custom-search-form">
                        <input type="text" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                    <!-- /input-group -->
                </li>
                <li>
                    <a href="/"><i class="fas fa-home"></i> Home Page <i class="fas fa-spinner"></i></a>
                </li>
                <li>
                    <a href="liststaff"><i class="fas fa-users"></i> Staff Management <span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="liststaff"> <i class="fas fa-list"></i> <span>List Staff<span></a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-user-plus"></i> <span>Add Staff</span> </a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href=""><i class="fas fa-info-circle"></i>Information PNV<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href=""> Main Value Of PNV</a>
                        </li>
                        <li>
                            <a href="#">Nền Tảng Xây Dựng Dự Án</a>
                        </li>
                        <li>
                            <a href="#">Cột Mốc Phát Triển</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>

                <li>
                    <a href="#"><i class="fas fa-handshake"></i>Partner<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="listuser">List User</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>

                <li>
                    <a href="#"><i class="fas fa-feather"></i>Post<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="waitingfor">Chia sẻ cá nhân</a>
                        </li>
                        <li>
                            <a href="blog_event">Sự kiện</a>
                        </li>
                      
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fas fa-hands-helping"></i>Help and support<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="waitingfor"><i class="fas fa-id-card"></i> <span>Contact<span></a>
                        </li>
                        <li>
                            <a href="waitingfordelivery"> <i class="fas fa-question"></i> <span>Q&A</span></a>
                        </li>
                       
                    </ul>
                    <!-- /.nav-second-level -->
                </li>

            </ul>
        </div>
        <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->
</nav>