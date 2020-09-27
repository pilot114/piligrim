<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="2"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header>
                <h2>Default header</h2>
            </el-header>
            <el-main>
                <el-steps finish-status="success">
                    <el-step title="Step 1"></el-step>
                    <el-step title="Step 2"></el-step>
                    <el-step title="Step 3"></el-step>
                </el-steps>

                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-time-select
                            :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30'
                                }"
                            placeholder="Select time">
                        </el-time-select>
                    </el-col>
                    <el-col :span="8">
                        <el-date-picker
                            type="date"
                            placeholder="Pick a day">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="8">
                        <el-switch></el-switch>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>
                <el-row>
                    <el-button>Default</el-button>
                    <el-button type="primary">Primary</el-button>
                    <el-button type="success">Success</el-button>
                    <el-button type="danger">Danger</el-button>
                </el-row>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "ElementExample"
}
</script>
